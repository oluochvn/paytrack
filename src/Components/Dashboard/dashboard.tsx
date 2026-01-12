import './dashboard.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Dashboard(){
    const user = useState('user');
    const amount = useState(150000);
    const saving =useState(20000)
    return(
        <div className='dash'>
            <div className='dashaside'>
                <h1 className='dashhead'>Pesatrak</h1>
                <nav className='dashnav'>
                    <ul>
                        <li className='dashactive'>Dashboard</li>
                        <li>Transactions</li>
                        <li>Savings</li>
                        <li>Expense</li>
                        <li>Settings</li>
                    </ul>
                   
                </nav>
                
            </div>
            <div className='dashcontent'>
                <h1>Dashboard</h1>
                <p>empower your finance</p>
                <div className='dashcard'>
                    <div className='dcard1'>
                        <p>balance</p><h1>KSH</h1>
                        <h1 className='amounthead'>{amount}</h1>
                    </div>
                    <div className='dcard1'>
                        <p>Savings account</p><h1>KSH</h1>
                        <h1 className='amounthead'>{saving}</h1>
                    </div>
                </div>

            <div className='dashtransaction'>
                <h3>recent transactions</h3>
            <table className='dashtable'>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>12/01/25</td>
                    <td>food</td>
                    <td>1000</td>
                    <td>completed</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>12/01/25</td>
                    <td>food</td>
                    <td>1000</td>
                    <td>completed</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>12/01/25</td>
                    <td>food</td>
                    <td>1000</td>
                    <td>completed</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>12/01/25</td>
                    <td>food</td>
                    <td>1000</td>
                    <td>completed</td>
                </tr>
            </table>
            </div>
            </div>
        </div>
    )
}
export default Dashboard