export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number

  }
  

    //  name = models.CharField(max_length=255)
    // description = models.TextField()
    // price = models.DecimalField(max_digits=10, decimal_places=2)
    // stock = models.PositiveIntegerField()
    // image = models.ImageField(upload_to='product_images/', null=True, blank=True)   
    // created_at = models.DateTimeField(auto_now_add=True)
    // updated_at = models.DateTimeField(auto_now=True)