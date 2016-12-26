export class AppService {
    checkForData(data) {
        return data;
    }

    ParseAndSum(numbers) {
        if(numbers.length == 0) {
            return 0;
        }
        if(numbers.indexOf(',') != -1) {
            return parseInt(numbers);
        }
        else {
            throw new Error('I can only handle 0 o 1 number for now!');
        }
    }
}