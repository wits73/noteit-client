import { NotesComponent } from './notes/notes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactsComponent },
  { path: '', component: NotesComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
