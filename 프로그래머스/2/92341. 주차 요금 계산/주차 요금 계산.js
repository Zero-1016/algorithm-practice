function changeMinute(times) {
    const [hours, minutes] = times.split(':').map(v => parseInt(v))

    return hours * 60 + minutes
}

function solution(fees, records) {
    var answer = [];
    const [initialMinute, initialPrice, count, countPrice] = fees;

    const ParkingWithTime = new Map();
    const ParkingWithCar = new Map();

    function carHandling(times, carNumber, action) {
        switch (action) {
            case "IN":
                ParkingWithCar.set(carNumber, times)
                break
            case "OUT":
                const prevTimes = changeMinute(ParkingWithCar.get(carNumber))
                const thisTimes = changeMinute(times)

                if (ParkingWithTime.has(carNumber)) {
                    ParkingWithTime.set(carNumber, ParkingWithTime.get(carNumber) + thisTimes - prevTimes)
                } else {
                    ParkingWithTime.set(carNumber, thisTimes - prevTimes)
                }

                ParkingWithCar.delete(carNumber)
                break
        }
    }

    records.forEach(element => {
        const [times, carNumber, action] = element.split(' ')
        carHandling(times, carNumber, action)
    });

    for (let car of ParkingWithCar) {
        const [carNumber] = car
        carHandling("23:59", carNumber, "OUT")
    }

    for (let car of ParkingWithTime) {
        const [carName, carTime] = car
        const useTime = Math.max(carTime - initialMinute, 0)
        const money = initialPrice + Math.ceil(useTime / count) * countPrice
        answer.push([carName, money])
    }

    return answer.sort((a, b) => Number(a[0]) - Number(b[0])).map(v => v[1]);
}