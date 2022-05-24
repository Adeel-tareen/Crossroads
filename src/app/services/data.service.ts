import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Error Handler
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      console.error('An error occurred:', error.error);
    } else {
      Swal.fire(
        'Search Results',
        'Wrong user name or repo name submitted.',
        'error'
      )
    }
    
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Get call for Getting commits
  getCommits(username: string, repo:string): Observable<any> {
    let endpoint = `https://api.github.com/repos/${username}/${repo}/commits`
    return this.http.get(endpoint).pipe(
      catchError(this.handleError)
    )

  }
}
