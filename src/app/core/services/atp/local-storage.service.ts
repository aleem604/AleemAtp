import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';
@Injectable()
export class LocalStorageService {
  anotherTodolist = [];
  STORAGE_KEY = 'currentUser';
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  public storeOnLocalStorage(dataForStore: string, key?: string): void {
    const storeKey = key || this.STORAGE_KEY;

    // insert updated array to local storage
    this.storage.set(storeKey, dataForStore);
  }
  getFromLocalStorage(key: string): any {
    const storeKey = key || this.STORAGE_KEY;
    return this.storage.get(storeKey);
  }
}
