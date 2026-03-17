import _ from 'lodash';

_.mul = function(array: number[]): number { 
    return array.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
};



export default _;