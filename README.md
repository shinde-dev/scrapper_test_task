# UNWRAPPED

## Dependencies
* Docker: 19.03.6

## Configuration

```docker-compose build```

## Run the script

```docker-compose up```

## Approch
I have used the adapter pattern as it increases reusability and flexibility. I have created adapter based on URL to scrap, I have found the adapter by URL passed in API and used parseData function of that adapter to build API response.

## Future Enhancement
1. Session managment.
2. Add script to save html files.


## Postman Collection
```https://www.postman.com/collections/77c6e53ffe6dea980183```