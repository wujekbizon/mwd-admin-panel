import './widgetLg.scss';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={`button ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="title">Latest transactions</h3>
      <table className="widgetTable">
        <tbody>
          <tr className="widgetTr">
            <th className="widgetTh">Customer</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetTr" key={order._id}>
              <td className="user">
                <span className="name">{order.userId}</span>
              </td>
              <td className="date">{order.createdAt}</td>
              <td className="amount">${order.amount}</td>
              <td className="status">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
