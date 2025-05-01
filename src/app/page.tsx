'use client';
import BenefitsSection from '@/components/BenefitsSection';
import heroSections from '@/data/benefits';
import { Container } from '@/components/Container';
import { Header } from '@/components/header/Header';
import { HeroSection } from '@/components/HeroSection';
import { CompanyAndPartners } from '@/components/main/CompanyAndPartners';
import { OurCourse } from '@/components/main/OurCourse';
import { FeaturesAndServices } from '@/components/main/FeaturesAndServices';
import { NewsAndArticles } from '@/components/main/NewsAndArticles';
import { Subscribe } from '@/components/main/Subscribe';
import { Footer } from '@/components/footer/Footer';
import { Main } from '@/components/main/Main';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { listenToCart } from '@/utils/cartFunctions';
import { useDispatch } from 'react-redux';

const Home = () => {
	// const { user, isLoaded } = useUser();

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (isLoaded && user?.id) {
	// 		const unsubscribe = listenToCart(user.id, dispatch);
	// 		return () => unsubscribe();
	// 	}
	// }, [isLoaded, user?.id, dispatch]);

	return (
		<Container>
			<Toaster />
			<Header />
			<Main>
				<HeroSection />
				<div className=" container bg-white">
					<CompanyAndPartners />
					<OurCourse />
					<FeaturesAndServices />
					{heroSections.map((section) => (
						<BenefitsSection
							key={section.id}
							headerText={section.title}
							paragraphText={section.description}
							buttonText={section.buttonText}
							imageSrc={section.imageSrc}
							buttonColor={section.buttonColor}
							imageOrder={section.imageOrder}
						/>
					))}
					<NewsAndArticles />
					<Subscribe />
				</div>
			</Main>
			<Footer />
		</Container >
	);
};
export default Home;
