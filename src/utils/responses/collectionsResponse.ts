import { Response } from 'express';
import { internalServerError, badRequest, unauthorized } from '../apiResponds';

export class CollectionResponse {
    // Unauthorized 4500 - 4599
    public static userDoesNotOwnThisCollection(response:Response, data?: any, error?: any, debug?: any) {
        unauthorized(response, 4500, 'The user does not own this collection', data, error, debug);
    }

    // Bad Request - 4800:4899

    public static missingParameters(response:Response, data?: any, error?: any, debug?: any): void {
        badRequest(response, 4800, 'There are missing parameters in the request', data, error, debug);
    }

    public static noObjectIdPassed(response:Response, data?: any, error?: any, debug?: any): void {
        badRequest(response, 4801, 'The object id was not passed', data, error, debug);
    }

    public static noCollectionIdFound(response:Response, data?: any, error?: any, debug?: any): void {
        badRequest(response, 4802, 'Could not find the collection ID in the url string', data, error, debug);
    }

    public static objectAlreadyAddedToCollection(response:Response, data?: any, error?: any, debug?: any): void {
        badRequest(response, 4803, 'The object has already been added to the collection', data, error, debug);
    }

    public static noValuesPassedToUpdate(response:Response, data?: any, error?: any, debug?: any): void {
        badRequest(response, 4804, 'Could not find any values to update', data, error, debug);
    }

    // Internal server errors - 4900:4999
    public static errorCreatingCollection(response:Response, data?: any, error?: any, debug?: any): void {
        internalServerError(response, 4900, 'Database error when creating a new collection', data, error, debug);
    }

    public static errorAddingObjectToCollection(response:Response, data?: any, error?: any, debug?: any): void {
        internalServerError(response, 4901, 'Database error when adding object to collection', data, error, debug);
    }

    public static errorRemovingObjectFromCollection(response:Response, data?: any, error?: any, debug?: any): void {
        internalServerError(response, 4902, 'Database error when removing object from collection', data, error, debug);
    }

    public static errorRemovingCollection(response:Response, data?: any, error?: any, debug?: any): void {
        internalServerError(response, 4903, 'Database error when removing collection', data, error, debug);
    }

    public static errorSearchingForCollection(response:Response, data?: any, error?: any, debug?: any): void {
        internalServerError(response, 4904, 'Database error when searching for a collection', data, error, debug);
    }

    public static couldNotUpdateCollection(response:Response, data?: any, error?: any, debug?: any): void {
        internalServerError(response, 4905, 'Database error when updating collection', data, error, debug);
    }

    public static errorSearchingForCollectionWithFromUserId(response:Response, data?: any, error?: any, debug?: any) : void {
        internalServerError(response, 4906, 'Database error when searching for collection by user ID', data, error, debug);
    }

    public static errorSearchingForAllCollections(response:Response, data?: any, error?: any, debug?: any) : void {
        internalServerError(response, 4907, 'Database error when searching for all collections', data, error, debug);
    }
}
