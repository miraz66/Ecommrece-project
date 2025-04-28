<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function addToCart(Request $request)
    {
        if (!Auth::check()) {
            return redirect('/login')->with('message', 'Please login to add products to cart');
        }

        $request->validate([
            'product_id' => 'required|integer|exists:products,id',
            'quantity' => 'nullable|integer|min:1',
        ]);

        $product = Product::find($request->product_id);

        $cart = Cart::where('user_id', Auth::id())
            ->where('product_id', $product->id)
            ->first();

        $quantity = $request->quantity ?? 1;
        if ($cart) {
            $cart->quantity += $quantity;
            $cart->save();

            return redirect()->back()->with('message', 'Product quantity updated in cart successfully');
        }


        Cart::create([
            'user_id' => Auth::id(),
            'product_id' => $product->id,
            'name' => $product->name,
            'image' => $product->image,
            'price' => $product->price,
            'discount' => $product->discount_price,
            'stock' => $product->stock,
            'rating' => $product->rating,
            'description' => $product->description,
            'quantity' => $quantity, // 👈 Added this
        ]);

        return redirect()->back()->with('message', 'Product added to cart successfully');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function removeFromCart(Request $request)
    {
        $card = Cart::find($request->id);
        if (!$card) {
            return redirect()->back()->with('message', 'Product not found in cart');
        }

        $card->delete();

        return redirect()->back()->with('message', 'Product removed from cart successfully');
    }
}
