using System;

namespace newone
{

   class main
    {
        public static void Main()
        {
            int i, j;
            int space = 3;
            int MAX = space + 1;
            int count = 0;

            for (i = 0; i < MAX; i++)
            {

                for (j = 0; j < space; j++)
                {
                    Console.Write(" ");
                }
                for (j = 0; j <= i; j++)
                {
                    Console.Write("* ");
                }

                Console.Write("\n");
                space--;
            }

            space = 0;

            for (i = MAX; i > 0; i--)
            {
                count++;

                if (count > 1)
                {
                    for (j = 0; j < space; j++)
                    {
                        Console.Write(" ");
                    }
                    for (j = 0; j < i; j++)
                    {
                        Console.Write("* ");
                    }

                    Console.Write("\n");
                }
                space++;
            }
            Console.ReadLine();
        }
    }

}
