import { FlatList, Text } from "react-native";
import ExpenceItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return ( <ExpenceItem {...itemData.item}/>
    );
}

function ExpensesList({expenses}) {
    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
}

export default ExpensesList;