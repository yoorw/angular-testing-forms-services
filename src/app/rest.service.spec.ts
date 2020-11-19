import {
  TestBed,
  async,
  getTestBed
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { RestService } from './rest.service';
import {FormData} from './models';

describe('RestService', () => {
  let backend: MockBackend;
  let service: RestService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        RestService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(RestService);
    // service = TestBed.inject(RestService);
  });

  // utility function - how fake server will respond to backend's connection
  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      if(connection.request.url === 'api/forms') {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);

        connection.mockRespond(response);
      }
    });
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of forms from the server on success', () => {
    setupConnections(backend, {
      body: [
        {
          id: 1,
          questions: [],
          title: 'Pizza'
        },
        {
          id: 4,
          questions: [],
          title: 'Burrito'
        },
        {
          id: 2,
          questions: [],
          title: 'Cheeseburger'
        }
      ],
      status: 200
    });

    service.getForms().subscribe((data: FormData[]) => {
      expect(data.length).toBe(3);
      expect(data[0].title).toBe('Pizza');
      expect(data[1].title).toBe('Burrito');
      expect(data[2].title).toBe('Cheeseburger');
    });
  });

  it('should log an error to the console on error', () => {
    setupConnections(backend, {
      body: {error: `I'm afraid I've got some bad news!!`},
      status: 500
    });
    spyOn(console, 'error');

    service.getForms().subscribe(null, () => {
      expect(console.error).toHaveBeenCalledWith(`I'm afraid I've got some bad news!!`);
    });
  });
});
