"use client";

import React from 'react';
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from 'react-icons/fa';
import CountUp from 'react-countup';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, prefix = '', suffix = '' }) => {

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-base-100 to-base-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <div className="text-center">
        <div className="text-2xl font-bold text-base-content mb-2">
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            prefix={prefix}
            suffix={suffix}
          />
        </div>
        <div className="text-sm text-base-content/70">{label}</div>
      </div>
    </div>
  );
};

const StatsBar: React.FC = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<FaChartLine />}
            value={615838}
            label="Qualified Leads Generated"
          />
          <StatItem
            icon={<FaDollarSign />}
            value={169686854}
            label="Clients Revenue Generated"
            prefix="$"
          />
          <StatItem
            icon={<FaShoppingCart />}
            value={2375628}
            label="Ecommerce Transactions"
          />
          <StatItem
            icon={<FaUsers />}
            value={42}
            label="Team Members Working for the past 6 Years"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsBar;