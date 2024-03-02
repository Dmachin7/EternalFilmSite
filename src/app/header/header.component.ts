import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  isScrolled: Boolean = false;
  show: String = 'dontShowNav';
  display: String = "show"

  showMobileNav = () =>  {
    switch (this.show) {
      case "dontShowNav":
        this.display = "hide"
        this.show = "showNav"
        break
      case "showNav":
        this.display = "show"
        this.show = "dontShowNav"
        break
    }
  }


  @HostListener('window:scroll', [])
  onWindowScrol() {
    this.isScrolled = window.scrollY > 750;
  }

 

  ngOnInit(): void {
      
  }

}
