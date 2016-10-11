define(["require", "exports"], function (require, exports) {
    "use strict";
    var FormInputs = (function () {
        function FormInputs() {
            this.movies = [
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
            this.selectedGender = "0";
            this.genderRadioGroup = "genders";
            this.genders = [
                { id: 'female', label: 'Female', value: 0 },
                { id: 'male', label: 'Male', value: 1 },
            ];
            this.colors = [
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
            this.multipleColors = [
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
        return FormInputs;
    }());
    exports.FormInputs = FormInputs;
});
//# sourceMappingURL=form-inputs.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pbnB1dHMvZm9ybS1pbnB1dHMuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiZm9ybS1pbnB1dHMvZm9ybS1pbnB1dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFBQTtRQUFBO1lBTUksV0FBTSxHQUFVO2dCQUNaLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO2dCQUN4RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUN4RCxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUNsRCxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNoRCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUNwRCxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUNsRCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUNwRCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUNwRCxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2FBQ3JELENBQUM7WUFFRixtQkFBYyxHQUFXLEdBQUcsQ0FBQztZQUM3QixxQkFBZ0IsR0FBVyxTQUFTLENBQUM7WUFDckMsWUFBTyxHQUFVO2dCQUNiLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzNDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7YUFDMUMsQ0FBQztZQUdGLFdBQU0sR0FBVTtnQkFDWixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDM0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDN0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUM3QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDM0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzVCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2FBQy9CLENBQUM7WUFHRixtQkFBYyxHQUFVO2dCQUNwQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDM0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDN0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUM3QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDM0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQzVCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2FBQy9CLENBQUM7UUFDTixDQUFDO1FBQUQsaUJBQUM7SUFBRCxDQUFDLEFBbERELElBa0RDO0lBbERZLGtCQUFVLGFBa0R0QixDQUFBIn0=
