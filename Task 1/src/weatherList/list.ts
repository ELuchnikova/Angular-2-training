import {IWeatherItem} from './../interfaces';
import {LIST_BODY, LIST_NAVIGATION} from './../containers';

export class List {
    private list: [IWeatherItem];
    private linesCountPerPage: number = 10;
    private currentPage: number;
    private paginationButtons: NodeListOf<HTMLAnchorElement>;

    constructor(allList: [IWeatherItem]) {
        this.list = allList;
        this.buildPagination();
        this.currentPage = 1;
        this.buildList();
    }

    private buildPagination(): void {
        let pageCount: number = Math.ceil(this.list.length / this.linesCountPerPage);
        let pagination: string = `<li class="disabled">
                                    <a href="#prev" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                  </li>
                                  <li class="active"><a href="#1">1</a></li>`;

        for (let i = 2; i <= pageCount; i++) {
            pagination += `<li><a href="#${i}">${i}</a></li>`;
        }

        pagination += `<li>
                          <a href="#next" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                          </a>
                       </li>`;

        LIST_NAVIGATION.innerHTML = pagination;

        this.addNavigationHandlers();
    }

    private addNavigationHandlers(): void {
        this.paginationButtons = LIST_NAVIGATION.getElementsByTagName('a');

        this.paginationButtons[0].addEventListener('click', this.previousPage.bind(this));
        this.paginationButtons[this.paginationButtons.length - 1].addEventListener('click', this.nextPage.bind(this));

        for (let i = 1; i < this.paginationButtons.length - 1; i++) {
            this.paginationButtons[i].addEventListener('click', this.changePage.bind(this));
        }
    }

    private buildList(): void {

        let weatherData = this.list.slice((this.currentPage - 1) * this.linesCountPerPage , this.currentPage * this.linesCountPerPage);

        let template: string = weatherData.reduce( ( result: string, item: IWeatherItem) => {
            return result +
                `<tr>
                    <td>${item.name}</td>
                    <td>${item.main.temp_min} - ${item.main.temp_max}°C</td>
                    <td>${item.weather[0].main}</td>
                    <td>${item.main.humidity}%</td>
                    <td>${item.main.pressure} hPa</td>
                    <td>${item.wind.speed}m/s</td>
                    <td>${item.clouds.all}%</td>
                </tr>`;
        }, '');

        LIST_BODY.innerHTML = template;
    }

    private changePage(event: Event): void {
        event.preventDefault();

        let elem: HTMLAnchorElement = <HTMLAnchorElement>event.target;

        this.redrawPagination(Number(elem.hash.substring(1)));
        this.buildList();
    }

    private nextPage(event: Event): void {
        event.preventDefault();

        if (this.currentPage !== this.paginationButtons.length - 2) {
            this.redrawPagination(this.currentPage + 1);
            this.buildList();
        }
    }

    private previousPage(event: Event): void {
        event.preventDefault();

        if (this.currentPage !== 1) {
            this.redrawPagination(this.currentPage - 1);
            this.buildList();
        }
    }

    private redrawPagination(newPage: number): void {
        this.paginationButtons[newPage].parentElement.classList.add('active');
        this.paginationButtons[this.currentPage].parentElement.classList.remove('active');

        this.paginationButtons[0].parentElement.classList.remove('disabled');
        this.paginationButtons[this.paginationButtons.length - 1].parentElement.classList.remove('disabled');

        if (newPage === 1) {
            this.paginationButtons[0].parentElement.classList.add('disabled');
        } else if ( newPage === this.paginationButtons.length - 2) {
            this.paginationButtons[this.paginationButtons.length - 1].parentElement.classList.add('disabled');
        }

        this.currentPage = newPage;
    }

    public static showError(error: Error) {
        LIST_BODY.innerHTML = error.message;
    }
}