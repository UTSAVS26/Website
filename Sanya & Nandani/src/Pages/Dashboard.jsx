import React from "react";

const Dashboard = () => {
    return (
        <main className="flex-1 pt-16">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
                <p className="text-lg mb-4">
                    Welcome to the Dashboard. Here you can find an overview of the key metrics and activities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Metric 1</h2>
                        <p>Details about Metric 1...</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Metric 2</h2>
                        <p>Details about Metric 2...</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Metric 3</h2>
                        <p>Details about Metric 3...</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
