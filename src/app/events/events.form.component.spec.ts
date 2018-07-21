import { TestBed, async , inject} from '@angular/core/testing';
import { EventsComponent } from './events.form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EventService } from '../shared/events.service';
describe('EventsComponent', () => {
  let eventsComponent: EventsComponent;
  let eventService: EventService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [EventService],
    }).compileComponents();
    eventsComponent = new EventsComponent();
    eventService = new EventService();
  }));
  it('check whether events component is getting initialized', async(() => {
    const fixture = TestBed.createComponent(EventsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
    
  it('test whether to-do item is getting added successfully', inject([EventService], (service: EventService) , async(() => {
    var addedItems = ["Visit Doctor",'Do Shopping'];
    var result = eventsComponent.saveEvent('Do Shopping'); 
        console.log('Result----------->'+result);
    expect(result).toBe(addedItems);
  })));
   
});