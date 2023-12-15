import {Injectable} from '@angular/core'
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import {Animal} from "./list-of-animals/list-of-animals.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getAnimals() {
    return this.http.get('assets/db.json');
  }

  getCats() {
    return this.http.get('http://localhost:3000/animals?kind_ne=кот');
  }

  errRequest() {
    return this.http.get('http://localhost:4200/animals');
  }

  createAnimal(newAnimal: Animal) {
    return this.http.post('http://localhost:3000/animals', newAnimal);
  }

  editAnimal(editAnimal: Animal, id: string) {
    return this.http.put('http://localhost:3000/animals/' + id, {
      "kind": editAnimal.kind,
      "nickname": editAnimal.nickname,
      "gender": editAnimal.gender,
      "age": editAnimal.age,
      "typeOfFood": editAnimal?.typeOfFood
    });
  }

  deleteAnimal(id: string) {
    return this.http.delete('http://localhost:3000/animals/' + id);
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone()
    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log('Ответ получен')
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 400)
              alert(`Ошибка ${err.status}. Некорректный запрос`)
            if (err.status == 404)
              alert(`Ошибка ${err.status}. Сервер не может найти данные согласно запросу`)
            if (err.status == 408)
              alert(`Ошибка ${err.status}. Неиспользуемое соединение разорвано`)
          }
        }
      )
    )
  }
}
