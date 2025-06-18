'use client';

import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <img src='/kneepain.webp'></img>
      <br></br>
      <p className="text-sm text-gray-500 mb-2">06 Mar 2024</p>
      <h1 className="text-3xl text-blue-900 font-bold mb-6">How Physiotherapy Can Help You Relieve Knee Pain</h1>

      <p className="mb-4">Are you suffering from knee pain? If so, you’re not alone. People of all ages can experience knee discomfort, which is a frequent issue. Numerous things, such as an accident, excessive use, or arthritis, might contribute to it. Knee pain can range from mild to severe and can make it difficult to walk, climb stairs, or participate in activities that you enjoy.</p>
      <p className="mb-6">If you are experiencing knee pain, let me take you through the blog post that discusses what is knee pain, its causes, tips to prevent it, and how to cure it.</p>

      <h2 className="text-2xl  text-blue-900 font-semibold mb-2">What Is Knee Pain?</h2>
      <p className="mb-4">Knee pain is pain in or around the knee joint. It can be caused by a variety of factors, including injury, overuse, and arthritis.</p>
      <p className="mb-6">Knee pain can range from mild to severe and can make it difficult to walk, climb stairs, or participate in activities that you enjoy.</p>

      <h2 className="text-2xl  text-blue-900 font-semibold mb-2">Causes Of Knee Pain</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Arthritis:</strong> Causes inflammation and pain in joints. Osteoarthritis is the most common type.</li>
        <li><strong>Injury:</strong> Can be from falls, accidents, ligament sprains, or meniscus tears.</li>
        <li><strong>Overuse:</strong> Excessive running or sports activity can inflame tendons and muscles.</li>
        <li><strong>Other conditions:</strong> Includes gout, bursitis, tendinitis.</li>
      </ul>

      <h2 className="text-2xl  text-blue-900 font-semibold mb-2">How Physiotherapy Helps Knee Pain</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Improving range of motion</li>
        <li>Strengthening the muscles around the knee</li>
        <li>Teaching proper body mechanics</li>
        <li>Providing pain relief</li>
      </ul>

      <h2 className="text-2xl  text-blue-900 font-semibold mb-4">Physiotherapy Methods To Treat Knee Pain</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Exercise:</strong> Improves motion, strength, flexibility, and reduces inflammation.</li>
        <li><strong>Massage:</strong> Relieves pain and boosts circulation.</li>
        <li><strong>Heat or cold therapy:</strong> Reduces pain and swelling.</li>
        <li><strong>Stretching:</strong> Gently improves flexibility.</li>
        <li><strong>Strength training:</strong> Builds joint stability.</li>
      </ul>

      <h2 className="text-2xl  text-blue-900 font-semibold mb-4">Physiotherapy Exercises For Knee Pain</h2>

      {/* Quadriceps Sets */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Quadriceps Sets</h3>
        <p className="mb-2">Tighten thigh muscles by pressing your knee down on a towel roll. Hold for 10 seconds and repeat.</p>
        <Image src="/quadriceps-sets-knee-pain-treatment.jpg" alt="Quadriceps Sets" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Hamstring Stretches */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Hamstring Stretches</h3>
        <p className="mb-2">Bend at the waist, keeping your back straight. Touch the floor gently and return to standing. Repeat 10–15 times.</p>
        <Image src="/hamstring-stretches.jpg" alt="Hamstring Stretches" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Calf Raises */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Calf Raises</h3>
        <p className="mb-2">Stand tall, lift heels off the ground, then slowly lower. Repeat 10–15 times.</p>
        <Image src="/Calf-raises.jpg" alt="Calf Raises" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Walking */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Walking</h3>
        <p className="mb-2">A low-impact way to increase flexibility, strength, and circulation around the knees.</p>
      </div>

      {/* Squats */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Squats</h3>
        <p className="mb-2">Lower down with knees behind toes. Engage core and rise up. Repeat 10–15 times.</p>
        <Image src="/Squats.jpg" alt="Squat exercise" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Wall Sits */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Wall Sits</h3>
        <p className="mb-2">Slide down a wall until thighs are parallel to the floor. Hold, then rise back up. Repeat.</p>
        <Image src="/walls-sits-knee-pain.jpg" alt="Wall sits" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Sit and Stand */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sit and Stand</h3>
        <p className="mb-2">Sit on a chair and slowly stand up without using hands. Hold and return. Repeat.</p>
        <Image src="/sit-to-stand.jpg" alt="Sit and Stand exercise" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
      </div>

      <h2 className="text-2xl  text-blue-900 font-semibold mb-2">Tips To Prevent Knee Pain</h2>
      <ul className="list-disc list-inside mb-10">
        <li>Maintain a healthy weight</li>
        <li>Exercise regularly to build muscle support</li>
        <li>Wear supportive shoes</li>
        <li>Warm up and cool down properly</li>
        <li>See a doctor if you have recurring pain</li>
      </ul>
    </div>
  );
};

export default Blog;
