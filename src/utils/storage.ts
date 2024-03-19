import { HashMap } from "types";
import { Brewery } from "types/interfaces";

class Storage {
  private favouriteBreweriesKey = "favouriteBreweries";

  constructor() {
    if (!localStorage.getItem(this.favouriteBreweriesKey)) {
      localStorage.setItem(this.favouriteBreweriesKey, JSON.stringify({}));
    }
  }

  private deepEqual(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  private getFavouriteBreweries(): HashMap<Brewery> {
    const favouriteBreweriesJSON = localStorage.getItem(
      this.favouriteBreweriesKey
    );
    return favouriteBreweriesJSON ? JSON.parse(favouriteBreweriesJSON) : {};
  }
  private setFavouriteBreweries(favouriteBreweries: HashMap<Brewery>): void {
    localStorage.setItem(
      this.favouriteBreweriesKey,
      JSON.stringify(favouriteBreweries)
    );
  }

  get(key: string): string {
    try {
      const favouriteBreweries = this.getFavouriteBreweries();
      return JSON.stringify(favouriteBreweries[key]);
    } catch {
      console.error(`Couldn't get ${key} from local this!`);
    }
    return "";
  }

  set(key: string, value: any): void {
    try {
      const favouriteBreweries = this.getFavouriteBreweries();
      favouriteBreweries[key] = value;
      this.setFavouriteBreweries(favouriteBreweries);
    } catch {
      console.error(`Couldn't set ${key} from local this!`);
    }
  }

  remove(key: string): void {
    try {
      const favouriteBreweries = this.getFavouriteBreweries();
      delete favouriteBreweries[key];
      this.setFavouriteBreweries(favouriteBreweries);
    } catch {
      console.error(`Couldn't remove ${key} from local storage!`);
    }
  }

  clear(): void {
    try {
      const favouriteBreweries = localStorage.getItem(
        this.favouriteBreweriesKey
      );
      if (favouriteBreweries !== null) {
        localStorage.removeItem(this.favouriteBreweriesKey);
      }
    } catch {
      console.error(`Couldn't clear local storage!`);
    }
  }

  replaceData(
    data: Brewery[],
    favourites: HashMap<Brewery>,
    changedBreweries: string[]
  ): Brewery[] {
    const favouriteBreweriesStorage = localStorage.getItem(
      this.favouriteBreweriesKey
    );
    const favouriteBreweriesHashMap: HashMap<string> = favouriteBreweriesStorage
      ? JSON.parse(favouriteBreweriesStorage)
      : {};

    Object.keys(favouriteBreweriesHashMap).forEach((key) => {
      const jsonString = favouriteBreweriesHashMap[key];

      try {
        const parsedValue: Brewery = JSON.parse(jsonString);

        if (parsedValue !== null) {
          const index = data.findIndex((elem) => elem.id === parsedValue.id);

          if (index !== -1) {
            if (!this.deepEqual(data[index], parsedValue)) {
              changedBreweries.push(key);
            }
            data.splice(index, 1);
          }

          favourites[key] = parsedValue;
          favouriteBreweriesHashMap[key] = JSON.stringify(parsedValue);
        } else {
          console.error(
            `Invalid data found in breweries storage for key: ${key}`
          );
        }
      } catch (error) {
        console.error(`Error parsing JSON for key: ${key}`, error);
      }
    });

    localStorage.setItem(
      this.favouriteBreweriesKey,
      JSON.stringify(favouriteBreweriesHashMap)
    );

    return data;
  }
}

export default Storage;
