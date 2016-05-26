export class FormInputs{
    
    //The user's name, will be bound to an input control in the view
    name: string;
    
    //A list of movie genres for the user to choose from. Will be bound to checkboxes
    movies: any[] = [
        { id: 'action-adventure', selected: false, label: 'Action / Adventure' },
        { id: 'animation', selected: false, label: 'Animation' },
        { id: 'comedy', selected: false, label: 'Comedy' },
        { id: 'drama', selected: false, label: 'Drama' },  
        { id: 'fantasy', selected: false, label: 'Fantasy' },
        { id: 'horror', selected: false, label: 'Horror' },
        { id: 'mystery', selected: false, label: 'Mystery' },
        { id: 'romance', selected: false, label: 'Romance' },
        { id: 'sci-fi', selected: false, label: 'Sci-Fi' }       
    ];
    
    selectedGender: string = "0";
    genderRadioGroup: string = "genders";
    genders: any[] = [
        { id: 'female', label: 'Female', value: 0 },
        { id: 'male', label: 'Male', value: 1 },
    ];
    
    selectedColor: string;
    colors: any[] = [
        { label: 'Blue', value: 0 },
        { label: 'Red', value: 1 },
        { label: 'Green', value: 2 },
        { label: 'Yellow', value: 3 },
        { label: 'Orange', value: 4 },
        { label: 'Purple', value: 5 },
        { label: 'Pink', value: 6 },
        { label: 'Black', value: 7 },
        { label: 'White', value: 8 }       
    ];
    
    selectedColors: any[];
    multipleColors: any[] = [
        { label: 'Blue', value: 0 },
        { label: 'Red', value: 1 },
        { label: 'Green', value: 2 },
        { label: 'Yellow', value: 3 },
        { label: 'Orange', value: 4 },
        { label: 'Purple', value: 5 },
        { label: 'Pink', value: 6 },
        { label: 'Black', value: 7 },
        { label: 'White', value: 8 }  
    ];
}
