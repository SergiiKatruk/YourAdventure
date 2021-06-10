import moment from "moment";
import { Adventue } from "../models/adventure";

let adventureId: string | undefined = undefined
let participantId: string | undefined = undefined
export const CreateParticipant = async (adventure: Adventue) =>{
    const response = await fetch("http://ws525:5000/api/Participants", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
              },
            body: JSON.stringify(
                {
                    phoneNumber: 'phoneNumber', 
                    phoneName: 'phoneName', 
                    startDate: moment(Date.now()),
                    name: 'Some name',
                    adventureId: adventure.id
                 })
        })
    const data = await response.json() 
    participantId = data.id
    adventureId = adventure.id
    return participantId
}

export const LogLocation = async (latitude: number, longitude: number) => {
    if(participantId)
        await fetch("http://ws525:5000/api/GeoLocation", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    participantId: participantId, 
                    adventureId: adventureId, 
                    logDate: moment(Date.now()),
                    latitude: latitude,
                    longitude: longitude
                })
        })
}