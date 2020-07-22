//json of our input
const formField = {
    formName: 
        [
            
            {
                type        : "text",
                label       : false,
                textLabel   : null,
                id          : null,
                required    : true,
                name        : "username",
                placeholder : "Username",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter an username!"
            },
            {
                type        : "email",
                label       : false,
                textLabel   : null,
                id          : null,
                required    : true,
                name        : "email",
                placeholder : "Email",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter an email!"
            },
            {
                type        : "password",
                label       : false,
                textLabel   : null,
                id          : "password",
                required    : true,
                name        : "password",
                placeholder : "Password",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter a passport"
            },
            {
                type        : "text",
                label       : false,
                textLabel   : null,
                id          : null,
                required    : true,
                name        : "firstName",
                placeholder : "First Name",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter a first name"
            },
            {
                type        : "text",
                label       : false,
                textLabel   : null,
                id          : null,
                required    : true,
                name        : "name",
                placeholder : "Name",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter a name"
            },
            {
                type          : "radio",
                label         : true,
                textLabel     : "Mr",
                id            : null,
                required      : true,
                name          : "gender",
                placeholder   : "Mr",
                value         : "Mr",
                autocomplete  : "off",
                initialChecked: false,
                error         : "You have to check one of this entry!"
            },
            {
                type          : "radio",
                label         : true,
                textLabel     : "Mrs",
                id            : null,
                required      : true,
                name          : "gender",
                placeholder   : "Mrs",
                value         : "Mrs",
                autocomplete  : "off",
                initialChecked: false,
                error         : "You have to check one of this entry!"
            },
            {
                type          : "checkbox",
                label         : true,
                textLabel     : "Vegan",
                id            : null,
                required      : true,
                name          : "vegan",
                placeholder   : "Vegan",
                value         : "vegan",
                autocomplete  : "off",
                initialChecked: false,
                error         : "You have to click on Vegan!"
            },
            {
                type          : "checkbox",
                label         : true,
                textLabel     : "Love Music",
                id            : null,
                required      : true,
                name          : "loveMusic",
                placeholder   : "Love Music",
                value         : "loveMusic",
                autocomplete  : "off",
                initialChecked: false,
                error         : "You have to click on Love Music!"
            },
            {
                type        : "text",
                label       : false,
                textLabel   : null,
                id          : null,
                required    : true,
                name        : "adress",
                placeholder : "Adress",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter an adress"
            },
            {
                type        : "tel",
                label       : false,
                textLabel   : null,
                id          : null,
                required    : true,
                name        : "zip",
                placeholder : "Zip Code",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter a zip code"
            },
            {
                type        : "big_text",
                id          : null,
                required    : true,
                name        : "comment",
                initialValue: "",
                autocomplete: "off",
                error       : "You have to enter a text"
            },
            {
                type        : "list",
                label       : false,
                textLabel   : null,
                id          : null,
                name        : "list",
                required    : true,
                initialValue: "State",
                optionArray : ["State", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
                    , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
                    , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
                    , "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
                    , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
                    , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
                    , "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
                    , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
                    , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
                    , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
                    , "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
                    , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
                    , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
                    , "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)"
                    , "Yemen", "Zambia", "Zimbabwe"],
                autocomplete: "off",
                error       : "You have to enter a choose a state"

            },
            {
                type             : "file",
                label            : true,
                textLabel        : "Upload your files!",
                id               : "file",
                required         : true,
                name             : "file",
                placeholder      : "File",
                autocomplete     : "off",
                error            : "You have to enter a file!",
                display          : true,
                extensionAccepted: "image/*"
            }
        ]
};

export default formField;