import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

const OrderHistoryScreen = (props) => {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  return (
    <div>
      <h1 className='font-semibold text-4xl mb-16'>Istorija Porudzbina</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className='w-full'>
          <thead>
            <tr className='border-b-1 border-secondary'>
              <th className='text-left py-2 text-sm'>ID</th>
              <th className='text-left py-2'>Datum</th>
              <th className='text-left py-2'>Ukupno</th>
              <th className='text-left py-2'>Placeno</th>
              <th className='text-left py-2'>Dostavljeno</th>
              <th className='text-left py-2'>Upravljanje</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                return (
                  <tr key={order._id}>
                    <td className='py-2'>{order._id}</td>
                    <td className='py-2'>{order.createdAt.substring(0, 10)}</td>
                    <td className='py-2'>{order.totalPrice}</td>
                    <td className='py-2'>
                      {order.isPaid ? order.paidAt.substring(0, 10) : "Nije"}
                    </td>
                    <td>
                      {order.isDelivered
                        ? order.deliveredAt.substring(0, 10)
                        : "Nije"}
                    </td>
                    <td className='py-2'>
                      <button
                        type="button"
                        className='transition-all duration-300 bg-quaternary p-2 text-sm rounded-lg text-white hover:bg-quinary'
                        onclick={() => {
                          props.history.push(`/order/${order._id}`);
                        }}
                      >
                        Detalji
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
