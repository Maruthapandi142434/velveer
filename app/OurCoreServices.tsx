"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Database,
    Building2,
    BarChart3,
    Monitor,
    Shield,
    Users,
} from "lucide-react";

interface Service {
    icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    href: string;
    color: string;
}

const OurCoreServices: React.FC = () => {
    const services: Service[] = [
        {
            icon: Database,
            title: "IT Governance and Strategy",
            description: "Almost every aspect of a business relies on IT in one way or another...",
            href: "/services#it-governance",
            color: "text-blue-600",
        },
        {
            icon: Building2,
            title: "Governance, Risk and Compliance (GRC)",
            description: "GRC is a sign of commitment of every successful organization...",
            href: "/services#grc",
            color: "text-green-600",
        },
        {
            icon: BarChart3,
            title: "Automotive Cybersecurity",
            description: "Connectivity is a cornerstone for a new business model...",
            href: "/services#automotive-cybersecurity",
            color: "text-purple-600",
        },
        {
            icon: Monitor,
            title: "Cybersecurity Assessment Services",
            description: "With the current advanced technologies, businesses can get more...",
            href: "/services#cybersecurity-assessment",
            color: "text-orange-600",
        },
        {
            icon: Shield,
            title: "AI Transformation Services",
            description: "AI is rapidly transforming organizations...",
            href: "/services#ai-transformation",
            color: "text-red-600",
        },
        {
            icon: Users,
            title: "Enterprise Resource Planning (ERP)",
            description: "Selecting a suitable ERP solution can be a daunting task...",
            href: "/services#erp",
            color: "text-indigo-600",
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive business solutions designed to drive growth, efficiency,
                        and digital transformation across your organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={service.title}
                                className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-slate-400"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <Button
                                        variant="ghost"
                                        asChild
                                        aria-label={`Learn more about ${service.title}`}
                                        className="group-hover:text-primary"
                                    >
                                        <Link href={service.href} scroll={true}>
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="text-center animate-fade-in-up ">
                    <Button variant="hero" size="lg" asChild className="bg-cyan-500 text-white">
                        <Link href="/services">
                            Explore All Services
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default OurCoreServices;
