import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Providing initial values for a public repo
  gitForm = new FormGroup({
    userName: new FormControl('octocat'),
    repoName: new FormControl('Hello-World')
  })

  commits = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.onFormSubmit()
  }

  onFormSubmit(): void {
    let username = this.gitForm.value.userName;
    let repo = this.gitForm.value.repoName;
    this.commits = []
    if(username === ''){
      Swal.fire(
        'Form Input',
        'User Name cannot be empty',
        'error'
      )

    } else if(repo === ''){
      Swal.fire(
        'Form Input',
        'Repo Name cannot be empty',
        'error'
      )
    } else{
      
      this.dataService.getCommits(username, repo).subscribe((res) => {
        if(res.length)
        {
          this.commits = res
        } else {
          Swal.fire(
            'Search Results',
            'No data found for given user name and repo name.',
            'error'
          )
        }
      })

    }

  }
}
