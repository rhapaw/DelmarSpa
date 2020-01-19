export class Listing {
    // For all properties (sale or lease)
    id?: number;
    saleOrLease: string = 'lease';
    propertyName!: string;
    addressLine1!: string;
    addressCity!: string;
    addressState: string = 'CA';
    addressZip!: string;
    validLatLong: boolean = false;
    latitude: number = 0;
    longitude: number = 0;
    propertyType!: string;
    subType?: string;
    zoning!: string;
    usage?: string;
    buildingClass: string = 'A';
    parcelNumber!: string;
    sizeSf: number = 0;
    numberOfUnits: number = 1;
    numberOfFloors: number = 1;
    typicalFloorSizeSf: number = 0;
    yearBuilt!: number;
    lotSize: number = 0;
    lotSizeUnits: string = 'sf';
    parkingSpaces: number = 0;
    description: string = 'describe property';
    highlights: string = 'property highlights';
    dockingHighDoors: number = 0;
    buildingSpace: number = 0;
    buildingSpaceUnits: string = 'sf';
    primaryPhotoUrl?: string;
    brochureUrl?: string;

    // For properties that are for sale
    saleType?: string;
    salePrice: number = 0;

    // For properties that are for lease
    leasePrice: number = 0;
    leasePriceTerm: string = 'month';
    leaseOfficeSizeSf: number = 0;
    leaseFloor: number = 1;
    leaseFrom?: Date;
    leaseTo?: Date;

    // Audit fields
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;
}

