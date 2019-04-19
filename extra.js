//this right here is a bunch of extra shit i didnt want to throw away just yet. but need out my face 


 // const betterData = data.map(passenger => passenger.fields)
        // ******************************************************
        // All passengets
        passengerCount = data.length

        // All males 
        maleCount = data.reduce((acc, passenger) => {
          if(passenger.fields.sex === 'male') {
            return acc += 1
          }
          return acc
        }, 0)

        // All women
        femaleCount = data.reduce((acc, passenger) => {
          if(passenger.fields.sex === 'female') {
            return acc += 1
          }
          return acc
        }, 0)

        // ******************************************************
        // List of all passengers who survived
        const survivors = data.reduce((acc, passenger) => {
          if(passenger.fields.survived === 'Yes') {
            return acc += 1
          }
          return acc
        }, 0)
        
        // List of all passengers who did not survive
        const deceased = data.reduce((acc, passenger) => {
          if(passenger.fields.survived === 'No') {
            return acc += 1
          }
          return acc
        }, 0)

        // ******************************************************

        // List of all of the female passengers that survived
        const female_survivors = data.reduce((acc, passenger) => {
          if(passenger.fields.sex === 'female' && passenger.fields.survived === 'Yes') {
            acc.push(passenger.fields.name)
          }
          return acc
        }, [])

        // List of all of the female passengers who did not survive
        const deceased_female = data.reduce((acc, passenger) => {
          if(passenger.fields.sex === 'female' && passenger.fields.survived === 'No') {
            acc.push(passenger.fields.name)
          }
          return acc
        }, [])

// betterData.forEach(el => {
        //   console.log(el.fare)
        // })
       
        // const passengers = makeGraph([maleCount, femaleCount, passengerCount], ['blue', 'pink', 'green'])
        // document.querySelector('body').appendChild(passengers)

        // const survivorsCount = makeGraph([survivors, deceased], ['green', 'red'])
        // document.querySelector('body').appendChild(survivorsCount)

        // const allFares = data.map((passenger) => {
        //   return passengers.fields.fare
        // }).filter((fare) => {
        //   return fare !== undefined 
        // })

        // const result = words.filter(word => word.length > 6);


        const allFares = betterData.map(fields => fields.fare)
        // const allFares = betterData.filter((fare) => {
        //   return fare !== undefined 
        // })

        console.log(allFares)

        const allPassengersGraph = makeGraph(allFares, ['blue', 'pink'], 900, 400)
        document.querySelector('body').appendChild(allPassengersGraph)
        