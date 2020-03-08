import { gql } from 'apollo-boost';

export const spells = () => {
    return gql`
    {
        future:spells(
                # first: 5, 
                orderBy: eta, 
                orderDirection: asc,
                where:{
                    isCancelled: false,
                    isExecuted: false,
                    eta_gt: "1583041442" # TODO - dynamic
                }
            ) {
                id
                eta
                createdAtTimestamp
                createdAtTransaction
                cancelledAtTimestamp
                cancelledAtTransaction
                executedAtTimestamp
                executedAtTransaction
                value
                signature
                data
                target { id }
                timelock {
                    id
                    platform { id }
                }
                isCancelled
                isExecuted
            }
        past:spells(
            first: 10, 
            orderBy: executedAtTimestamp, 
            orderDirection: desc,
            where:{
                isExecuted: true
            }
        ) {
            id
            eta
            createdAtTimestamp
            createdAtTransaction
            cancelledAtTimestamp
            cancelledAtTransaction
            executedAtTimestamp
            executedAtTransaction
            value
            signature
            data
            target { id }
            timelock {
                id
                platform { id }
            }
            isCancelled
            isExecuted
        }
    }`
}