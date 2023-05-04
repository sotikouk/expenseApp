import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-04-28')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2023-04-20')
    },
    {
        id: 'e3',
        description: 'Bananas',
        amount: 5.99,
        date: new Date('2023-03-28')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 19.99,
        date: new Date('2023-04-10')
    },
    {
        id: 'e5',
        description: 'An other book',
        amount: 59.99,
        date: new Date('2023-04-11')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-04-28')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2023-04-20')
    },
    {
        id: 'e8',
        description: 'Bananas',
        amount: 5.9,
        date: new Date('2023-03-28')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 19.99,
        date: new Date('2023-04-10')
    },
    {
        id: 'e10',
        description: 'An other book',
        amount: 59.99,
        date: new Date('2023-04-11')
    }
];

function ExpencesOutput({ Expenses, ExpensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={ ExpensesPeriod }/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}

export default ExpencesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});