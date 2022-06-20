import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

import { useState, useEffect, useMemo } from 'react';
import { userRequest } from '../../requestMethods';

const Home = () => {
  const [userStats, setUsersStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats');
        res.data.map((item) => {
          return setUsersStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              'Active User': item.total,
            },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userStats}
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
