const {dataTransformation} = require('./modules/data_transformation.js');
const {getOutputFile, getInputFile, validateArgs} = require('./modules/console_arguments.js');

validateArgs();
dataTransformation(getInputFile(), getOutputFile());
