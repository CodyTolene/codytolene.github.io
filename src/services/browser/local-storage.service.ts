import { Injectable } from '@angular/core';
import { isNil } from 'lodash';

@Injectable()
export class LocalStorageService<T> {
  public clear(): void {
    localStorage.clear();
  }

  public get<K extends Extract<keyof T, string>>(key: K): string | null {
    return localStorage.getItem(key);
  }

  public set<K extends Extract<keyof T, string>>(
    key: K,
    value: string | null,
  ): void {
    if (isNil(value)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }
}
