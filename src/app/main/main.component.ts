import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  images: string[] = ['../../assets/Pic1.JPG', '../../assets/Pic2.JPG', '../../assets/Pic3.jpg', '../../assets/Pic4.jpg']
  currentIndex: number = 0;
  currentImage: string = '../../assets/Pic1.JPG';

  constructor () { }

  ngOnInit(): void {
      this.startSlideshow()
  }

  startSlideshow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.currentImage = this.images[this.currentIndex]
    }, 3000)
  }

}
