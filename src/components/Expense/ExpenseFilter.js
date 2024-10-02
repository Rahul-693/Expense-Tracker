import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeHandler(event.target.value);
    }
    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                </select>
            </div>
        </div>
    )
};
export default ExpenseFilter;