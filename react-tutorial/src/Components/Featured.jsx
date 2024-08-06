import React from 'react'
import Card from './Card'

export default function Featured() {
    return (
        <>
            <h2 class="section-heading">Featured</h2>
            <div class="feature-card-container">
                <Card 
                title="Boost your Influence" 
                bodyText="Amplify your reach and connect with your audience across email, SMS, WhatsApp, Web push, and Facebook Ads."
                buttonText="Create a campaign"
                />
                <Card 
                title="Simplify your connections" 
                bodyText="Keep your contacts all in one place. Streamline your network for easy access and smoother connections."
                buttonText="Add Contacts"
                />
                <Card 
                title="Tailor your path to success" 
                bodyText="Explore a range of plans customized for your unique business needs. Find the perfect fit and unlock your full potential."
                buttonText="Manage your plan"
                />
            </div>

        </>
    )
}
