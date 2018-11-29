import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';
import { NoteTextFilterPipe } from './shared/pipes/note-text-filter.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailComponent } from './contacts/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    NavigationComponent,
    NotFoundComponent,
    NotesComponent,
    NoteComponent,
    NoteTextFilterPipe,
    ContactsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
