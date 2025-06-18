'use client';

import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-gray-800">
      <img src='/backpain.webp'></img>
      <p className="text-sm text-gray-500">06 Mar 2024</p>

      <h1 className="text-3xl text-blue-900 md:text-4xl font-bold">
        How Physiotherapy Can Help You Relieve Lower Back Pain
      </h1>

      <p>Do you suffer from lower back pain?</p>
      <p><strong>Physiotherapy can help!</strong></p>
      <p>
        Physiotherapy is a type of treatment that uses exercise, massage, and other techniques to help you improve your range of motion, strength, and flexibility.
      </p>
      <p>
        If you’re interested in learning more about how physiotherapy can help you with your lower back pain, please read on.
      </p>

      <h2 className="text-2xl text-blue-900 font-semibold mt-8">What Is Physiotherapy?</h2>
      <p>
        Physiotherapy, also known as physical therapy, is a healthcare profession that helps people improve their movement and function. Physiotherapists use a variety of techniques, including exercise, massage, and manual therapy, to help people with a wide range of conditions, including lower back pain.
      </p>

      <h2 className="text-2xl text-blue-900 font-semibold mt-8">How Does Physiotherapy Work For Lower Back Pain?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Exercise:</strong> Physiotherapists will design a personalized exercise program to help you strengthen your core muscles and improve your flexibility.
        </li>
        <li>
          <strong>Massage:</strong> Massage can help to reduce pain and inflammation.
        </li>
        <li>
          <strong>Heat therapy:</strong> Heat therapy can help to relax muscles and reduce pain.
        </li>
        <li>
          <strong>Cold therapy:</strong> Cold therapy can help to reduce inflammation and pain.
        </li>
        <li>
          <strong>Electrical stimulation:</strong> Electrical stimulation can help to reduce pain and improve muscle function.
        </li>
      </ul>

      <h2 className="text-2xl text-blue-900 font-semibold mt-8">What Are The Benefits Of Physiotherapy For Lower Back Pain?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Pain relief</li>
        <li>Improved range of motion</li>
        <li>Increased strength</li>
        <li>Improved balance and coordination</li>
        <li>Reduced inflammation</li>
        <li>Improved quality of life</li>
      </ul>

      <h2 className="text-2xl text-blue-900 font-semibold mt-8">Exercises To Overcome Lower Back Pain</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">Knee to chest stretch</h3>
          <p>
            Lie on your back with your knees bent. Bring one knee towards your chest and hold it with both hands. Hold for 30 seconds and repeat on the other side.
          </p>
          <img src='/knee-to-chest-stretch.jpg'></img>
        </div>

        <div>
          <h3 className="font-semibold">Cat-cow Exercise</h3>
          <p>
            Start on your hands and knees, with your back straight. As you inhale, arch your back and look up. As you exhale, round your back and tuck your chin towards your chest. Repeat 10 times.
          </p>
          <img src='/cat-cow-pose.jpg'></img>
        </div>

        <div>
          <h3 className="font-semibold">Bird dog Exercise</h3>
          <p>
            Start on all fours, with your hands under your shoulders and your knees under your hips. Extend your right arm and left leg straight out in front of you. Hold for 30 seconds and repeat on the other side.
          </p>
          <img src='/bird-dog-pose.jpg'></img>
        </div>

        <div>
          <h3 className="font-semibold">Bridge Exercise</h3>
          <p>
            Lie on your back with your knees bent and your feet flat on the floor. Place your arms at your sides, palms down. Slowly raise your hips off the floor until your body forms a straight line from your shoulders to your knees. Hold for 30 seconds and lower back down.
          </p>
          <img src='/bridge-pose.jpeg'></img>
        </div>

        <div>
          <h3 className="font-semibold">Plank Exercise</h3>
          <p>
            Start in a push-up position with your forearms on the ground directly under your shoulders and your body in a straight line from your head to your heels. Engage your core and tighten your glutes. Hold the position for as long as you can, making sure to maintain good form.
          </p>
          <img src='/plank.png'></img>
        </div>
      </div>

      <h2 className="text-2xl text-blue-900 font-semibold mt-8">How To Prevent Lower Back Pain</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Maintain a healthy weight: Carrying extra weight can put extra strain on your back.</li>
        <li>Strengthen your core muscles: Strong core muscles can help support your back and prevent pain.</li>
        <li>Stretch regularly: Stretching can help improve your flexibility and reduce your risk of injury.</li>
        <li>Lift with your legs, not your back: When lifting something heavy, bend your knees and lift with your legs.</li>
        <li>Take breaks: If you have to sit for a long time, get up and move around every 20–30 minutes.</li>
        <li>Use good posture: When you’re standing, sitting, or lying down, make sure your spine is in a neutral position.</li>
        <li>Avoid smoking: Smoking can weaken your bones and make you more likely to develop osteoporosis, which can increase your risk of back pain.</li>
        <li>Get enough sleep: When you’re well-rested, your body is better able to heal and repair itself.</li>
      </ul>
    </div>
  );
};

export default Blog;
