<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    /**
     * Add to wishlist
     */
    public function addToWishlist(Request $request)
    {
        // dd($request->all());
        if (!Auth::check()) {
            return redirect('/login')->with('message', 'Please login to add products to wishlist');
        }
        $request->validate([
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $product = Product::find($request->product_id);

        $wishlist = Wishlist::where('user_id', Auth::id())
            ->where('product_id', $request->product_id)
            ->first();

        if ($wishlist) {
            return redirect()->back()->with('message', 'Product already in wishlist');
        }

        Wishlist::create([
            'user_id' => Auth::id(),
            'product_id' => $product->id,
            'name' => $product->name,
            'image' => $product->image,
            'price' => $product->price,
        ]);
        return redirect()->back()->with('message', 'Product added to wishlist successfully');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wishlist $wishlist)
    {
        $wishlist = Wishlist::find($wishlist->id);

        if ($wishlist) {
            $wishlist->delete();
            return redirect()->back()->with('message', 'Product removed from favorites successfully');
        } else {
            return redirect()->back()->with('message', 'Product not found in favorites');
        }
    }
}
