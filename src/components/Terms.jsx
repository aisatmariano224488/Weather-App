import { getTermsData } from '@/services/termsService';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const Terms = () => {

    const terms = getTermsData()?.['Terms of Service'];

    return (
        <Sheet>
            <SheetTrigger
                render={
                    <button
                        className='w-fit duration-200 transition-all hover:opacity-50 cursor-pointer'
                    ></button>}
            >
                Terms of Service
            </SheetTrigger>
            <SheetContent side='bottom' className="max-h-[80vh]">
                <SheetHeader>
                    <SheetTitle className="font-bold text-4xl">Terms of Service</SheetTitle>
                    <SheetDescription>Effective Date: July 25, 2026</SheetDescription>
                </SheetHeader>

                <div className="hide-scrollbar tracking-wide overflow-y-auto px-4">
                    <p className='text-base'>Welcome to our weather application ("we," "our," or "us"). By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully. If you do not agree to these terms, please do not use our website.</p>
                    
                    {terms.map(value => (
                        <div key={value.id} className='py-4'>
                            <strong className='text-2xl'>{value.id}. {value.title}</strong>
                            <div className='ml-8 mt-4'>
                                {Array.isArray(value.desc) ? (
                                    <ul>
                                        {value.desc.map((des, index) => (
                                        <li key={index} className='ml-8'>
                                            <strong className='text-lg'>• {des.title}</strong>
                                            <p className='ml-8 my-1'>{des.desc}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    ) : (
                                    <div>
                                        {typeof value.desc === 'object' && value.desc !== null
                                        ? (
                                            <div>
                                                <p>{value.desc.title}</p>
                                                <p>{value.desc.desc}</p>
                                            </div>
                                        )
                                        : <p>{value.desc}</p>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    
                </div>
                <SheetFooter>
                    <SheetClose render={<Button className="cursor-pointer" variant="outline">Accept Terms of Service</Button>} />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
 
export default Terms;