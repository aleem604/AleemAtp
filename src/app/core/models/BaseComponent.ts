import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
	toaster: ToastrService;
	spinner: NgxSpinnerService;
	constructor(toaster: ToastrService, spinner: NgxSpinnerService) {
		this.toaster = toaster;
		this.spinner = spinner;
	}

	showLoading() {
		this.spinner.show();
	}

	hideLoading() {
		this.spinner.hide();
	}

	showSuccess(title: string = 'success', message: string = 'success') {
		this.toaster.success(message, title, {
			timeOut: 6000
		});
	}

	showInfo(title: string = 'success', message: string = 'success') {
		this.toaster.info(message, title, {
			timeOut: 6000
		});
	}

	showError(title: string = 'error', message: string = 'error') {
		this.toaster.error(message, title, {
			timeOut: 6000
		});
	}
}
