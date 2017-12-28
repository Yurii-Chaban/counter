import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	@Input()
	count = 0;

	@Output()
	change: EventEmitter<number> = new EventEmitter<number>();

	increment() {
		this.count++;
		this.change.emit(this.count);
	}

	decrement() {
		this.count--;
		this.change.emit(this.count);

		if (this.count < 0) {
			this.count = 0;
			alert("Number cannot be less than zero!");
		}
	}

}
