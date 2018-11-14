import { Component, OnInit } from '@angular/core';
import { Notebook } from './model/notebook';
import { ApiService } from './../shared/api.service';
import { Note } from './model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;
  searchText: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllNotebooks();
  }

  createNote(selectedNotebookId: string) {
    const tempNotebook: Notebook = this.notebooks.find(obj => obj._id === selectedNotebookId);
    const newNote: Note = {
      title: 'New Note',
      text: 'This is default text',
      lastModifiedOn: new Date()
    };
    tempNotebook.notes.push(newNote);
    this.updateNotebook(tempNotebook);
    // console.log(tempNotebook);
  }

  updateNote(updateNote: Note) {
    this.notebooks.forEach((elem) => {
      const idx = elem.notes.indexOf(updateNote);
      if (idx !== -1) {
        elem.notes[idx] = updateNote;
        console.log(idx, elem);
        this.updateNotebook(elem);
      }
    });
  }

  deleteNote(delNote: Note) {
    this.notebooks.forEach((elem) => {
      const idx = elem.notes.indexOf(delNote);
      if (idx !== -1) {
        elem.notes.splice(idx, 1);
        // console.log(idx, elem);
        this.updateNotebook(elem);
      }
    });
  }

  /* Start Notebooks part */
  getAllNotebooks() {
    this.notebooks = [];
    this.notes = [];
    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.notebooks = res;
        this.notebooks.forEach((elem, index) => {
          elem.notes.forEach((note) => {
            return this.notes.push(note);
          });
        });
        // console.log(this.notes);
      },
      err => {
        alert('An error has occurred');
      }
    );
  }

  createNotebook() {
    const newNotebook: Notebook = {
      _id: null,
      topic: 'New notebook',
      notes: []
    };
    this.apiService.createNotebook(newNotebook).subscribe(
      res => {
        newNotebook._id = res._id;
        this.notebooks.push(newNotebook);
      },
      err => {
        alert('An error has occurred while saving the notebook');
      }
    );
  }

  deleteNotebook(deleteNotebook: Notebook) {
    if (confirm('Are you sure you want to delete notebook?')) {
      // console.log(deleteNotebook._id);
      this.apiService.deleteNotebook(deleteNotebook._id).subscribe(
        res => {
          const indexOfNotebook = this.notebooks.indexOf(deleteNotebook);
          this.notebooks.splice(indexOfNotebook, 1);
        },
        err => {
          alert('An error has occurred while saving the notebook');
        }
      );
    }
  }

  updateNotebook(updateNotebook: Notebook) {
    this.apiService.updateNotebook(updateNotebook).subscribe(
      res => {
        // console.log(res);
        this.selectNotebook(res);
      },
      err => {
        alert('An error has occurred while saving the notebook');
      }
    );
  }

  selectNotebook (notebook: Notebook) {
    this.selectedNotebook = notebook;
    this.notes = [];
    if (this.selectedNotebook.notes.length > 0 ) {
      this.selectedNotebook.notes.forEach((note) => {
        return this.notes.push(note);
      });
    }
    // console.log(this.notes.length);
  }
  /* End Notebooks part */

  clickedAllBtn() {
    this.getAllNotebooks();
    this.selectedNotebook = null;
  }

}
