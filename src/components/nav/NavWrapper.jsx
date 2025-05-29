'use client';
import useMedia from 'use-media';
import Navbar from '@/components/nav/Navbar';
import PocketNav from '@/components/nav/PocketNav';

export default function NavWrapper() {
    return useMedia({ maxWidth: 768 }) ? <PocketNav /> : <Navbar />;
}