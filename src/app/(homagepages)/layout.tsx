// Components Pages
import ProvidersNextAuth from "@/lib/providers/providers-next-auth"
import ProvidersTanstackQuery from "@/lib/providers/providers-react-query"
import ProvidersToaster from "@/lib/providers/providers-toaster"
import Navbar from "@/components/headers/navbar"

// Supports
import { cn } from "@/lib/utils"

export default function LayoutHomepages({ children }: { children: React.ReactNode }) {
    return(
        <>
            {/* <ProvidersNextAuth> */}
            <ProvidersTanstackQuery>
                <ProvidersToaster>
                    <section
                        className={cn(
                            "w-full min-h-screen max-w-5xl mx-auto lg:px-4 lg:py-4",
                        )}
                    >
                        <section className="w-full">
                            <Navbar />
                        </section>
                        <section className="w-full">
                            {children}
                        </section>
                        {/* <section className="w-full">
                            <Footer />
                        </section> */}
                    </section>
                </ProvidersToaster>
            </ProvidersTanstackQuery>
            {/* </ProvidersNextAuth> */}
        </>
    )
}