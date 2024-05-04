import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

export default function BlogDetailPage() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-8 md:py-12">
      <div className="space-y-6">
        <article className="prose prose-gray dark:prose-invert">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            The Rise of Artificial Intelligence in Modern Society
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <img
                alt="Author Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <span>John Doe</span>
            </div>
            <span>•</span>
            <time dateTime="2023-04-15">April 15, 2023</time>
          </div>
          <p>
            Artificial Intelligence (AI) has been a topic of fascination and
            speculation for decades, but in recent years, it has become an
            increasingly integral part of our daily lives. From virtual
            assistants like Siri and Alexa to self-driving cars and personalized
            recommendations, AI is transforming the way we interact with
            technology and the world around us.
          </p>
          <p>
            One of the most significant impacts of AI has been in the field of
            automation. AI-powered systems can perform a wide range of tasks,
            from data analysis to customer service, with speed and efficiency
            that far surpasses human capabilities. This has led to increased
            productivity and cost savings for businesses, but it has also raised
            concerns about job displacement and the ethical implications of
            automating certain tasks.
          </p>
          <p>
            Another area where AI has made significant strides is in the realm
            of healthcare. AI-powered diagnostic tools can analyze medical
            images and patient data with unprecedented accuracy, helping to
            identify conditions and diseases at earlier stages. This has the
            potential to save lives and improve patient outcomes, but it also
            raises questions about privacy and the role of human healthcare
            providers in an increasingly automated system.
          </p>
          <p>
            As AI continues to evolve and become more sophisticated, it will
            undoubtedly have an even greater impact on our lives. While the
            potential benefits of AI are vast, it is crucial that we approach
            its development and implementation with a careful and thoughtful
            approach, considering the ethical, social, and economic implications
            of this transformative technology.
          </p>
        </article>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>
                Navigating the Complexities of Modern Relationships
              </CardTitle>
              <CardDescription>
                Exploring the challenges and opportunities in building
                meaningful connections in the digital age.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Blog Post Cover"
                className="rounded-lg object-cover"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                The Future of Remote Work: Trends and Insights
              </CardTitle>
              <CardDescription>
                Examining the evolving landscape of remote work and its impact
                on the workforce.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Blog Post Cover"
                className="rounded-lg object-cover"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Sustainable Living: Practical Tips for a Greener Lifestyle
              </CardTitle>
              <CardDescription>
                Discover simple yet impactful ways to reduce your carbon
                footprint and live more sustainably.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Blog Post Cover"
                className="rounded-lg object-cover"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Related Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Link className="group flex items-center gap-3" href="#">
                <img
                  alt="Blog Post Cover"
                  className="rounded-lg object-cover"
                  height={60}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium group-hover:underline">
                    The Rise of Chatbots: Revolutionizing Customer Service
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Exploring the impact of AI-powered chatbots on customer
                    interactions and support.
                  </p>
                </div>
              </Link>
              <Link className="group flex items-center gap-3" href="#">
                <img
                  alt="Blog Post Cover"
                  className="rounded-lg object-cover"
                  height={60}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium group-hover:underline">
                    The Ethical Dilemmas of Autonomous Vehicles
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Exploring the complex moral and ethical questions
                    surrounding self-driving cars.
                  </p>
                </div>
              </Link>
              <Link className="group flex items-center gap-3" href="#">
                <img
                  alt="Blog Post Cover"
                  className="rounded-lg object-cover"
                  height={60}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium group-hover:underline">
                    The Future of Healthcare: AI-Powered Diagnostics
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Examining the potential of AI in revolutionizing medical
                    diagnosis and treatment.
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Link className="text-sm font-medium hover:underline" href="#">
                Artificial Intelligence
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Technology
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Society
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Ethics
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Healthcare
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
