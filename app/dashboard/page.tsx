"use client"
import React, { useState } from 'react'
import styles from './dashboard.module.css'
import GradientText from '../../components/GradientText'
import DarkVeil from '../../components/DarkVeil'

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    profilePicture: '',
    coverPicture: '',
    razorpayId: '',
    razorpaySecret: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className={styles.container}>
      <GradientText>
        <h1 className="text-3xl font-bold text-center mb-9">Profile Dashboard</h1>
      </GradientText>
      <form onSubmit={handleSubmit} className={styles.formGrid}>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter your name" 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter your email" 
          />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label} htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter your username" 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="profilePicture">Profile Picture</label>
          <input 
            type="text" 
            id="profilePicture" 
            name="profilePicture" 
            value={formData.profilePicture} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter profile picture URL" 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="coverPicture">Cover Picture</label>
          <input 
            type="text" 
            id="coverPicture" 
            name="coverPicture" 
            value={formData.coverPicture} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter cover picture URL" 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="razorpayId">Razorpay ID</label>
          <input 
            type="text" 
            id="razorpayId" 
            name="razorpayId" 
            value={formData.razorpayId} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter Razorpay ID" 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="razorpaySecret">Razorpay Secret</label>
          <input 
            type="password" 
            id="razorpaySecret" 
            name="razorpaySecret" 
            value={formData.razorpaySecret} 
            onChange={handleChange} 
            className={styles.input} 
            placeholder="Enter Razorpay Secret" 
          />
        </div>

        <div className={styles.fullWidth}>
          <button type="submit" className={styles.submitBtn}>Save</button>
        </div>

      </form>
    </div>
  )
}

export default Dashboard
