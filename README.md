# NodeLogoGen

This Node.js command-line application allows users to generate simple SVG logos. Users can choose the shape (circle, triangle, or square), colors for both the text and the shape, and up to three characters of text to include in the logo.



![Gif demo of NodeLogoGen](/gif/NodeLogoGen.gif)


[You can see video here](https://drive.google.com/file/d/1KNmrf6OW0CmbhUVGk21YOJeQWDRh6FUC/view)


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running-Tests](#running-tests)
- [Credits](#credits)
- [License](#license)


## Features

- Create SVG logos with customizable shapes, colors, and text.
- Choose from three shapes: circle, triangle, or square.
- Specify colors using keywords or hexadecimal values.
- Add up to three characters of text to your logo.


## Installation

1. **Clone the Repository:** Begin by cloning the repository to your local machine:

    ```bash
    git clone https://github.com/rlobz/NodeLogoGen
    ```

2. **Access the Directory:** Navigate into the directory of the cloned repository.
  
    ```bash
    cd NodeLogoGen
    ```

3. **Required packages:** To install the necessary packages for this application, follow these steps:

    ```bash
    npm install
    ```


## Usage

To run the application:

1. Navigate to the project directory in your terminal.
2. Run the command `node index.js`.
3. Follow the on-screen prompts to select your logo's shape, colors, and text.
4. The generated logo will be saved in the `examples` directory with a filename based on your text input.


## Running Tests

To run the unit tests for the shape classes:

1. Navigate to the project directory.
2. Run `npm test`.

This will execute tests defined in `lib/shapes.test.js` to ensure the rendering functionality of each shape works as expected.


## Credits

**Rafal Lobzowski**
- Github: [@rlobz](https://github.com/rlobz)


## License

This project have no licence